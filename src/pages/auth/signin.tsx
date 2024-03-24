import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)

    toast.success('Enviamos um link de autenticação para o seu email', {
      action: {
        label: 'Reenviar',
        onClick: () => {
          handleSignIn(data)
        },
      },
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
              Acompanhe suas vendas
            </p>
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
