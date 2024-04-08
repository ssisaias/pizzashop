import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { env } from '@/env'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: { email: searchParams.get('email') ?? '' },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      console.log('success')
    },
    onError: () => {
      console.log('error')
    },
  })

  async function handleSignIn(data: SignInForm) {
    await authenticate({ email: data.email })
      .then(() => {
        if (env.VITE_MODE === 'test') {
          toast.success('Clique para ir ao dashboard', {
            action: {
              label: 'Dashboard',
              onClick: () => {
                navigate('/')
              },
            },
          })
        } else {
          toast.success('Enviamos um link de autenticação para o seu email', {
            action: {
              label: 'Reenviar',
              onClick: () => {
                handleSignIn(data)
              },
            },
          })
        }
      })
      .catch(() => {
        toast.error('Credenciais inválidas')
      })
  }

  return (
    <>
      <Helmet title="login" />
      <div className="p-8">
        <div className="flex w-[340px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas{' '}
            </p>{' '}
            {env.VITE_MODE === 'test' && (
              <p>Demo mode, use: john.doe@example.com</p>
            )}
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full rounded"
              type="submit"
            >
              Acessar painel
            </Button>
          </form>
          <Button
            asChild
            variant={'link'}
            className="absolute bottom-2 max-h-fit w-[340px] rounded border border-red-500"
          >
            <Link to="/signup">
              <p>Não tem conta? Cadastre-se</p>
              <span className="underline"> </span>
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
