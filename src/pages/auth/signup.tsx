import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerRestaurant } from '@/api/register'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string().min(3),
  managerName: z.string().min(3),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { mutateAsync: registerRestauranteRequest } = useMutation({
    mutationFn: registerRestaurant,
  })

  async function handleSignUp(data: SignUpForm) {
    const res = await registerRestauranteRequest({
      restaurantName: data.restaurantName,
      managerName: data.managerName,
      email: data.email,
      phone: data.phone,
    })
    console.log(data)
    console.log(res)

    toast.success('Cadastrado com sucesso!', {
      action: {
        label: 'Login',
        onClick: () => {
          navigate(`/signin?email=${data.email}`)
        },
      },
    })
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <div className="flex w-[340px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crie sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Responsável</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <p className="text-xs text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <Link to="/terms" className="underline">
                Termos de Serviço
              </Link>{' '}
              e{' '}
              <Link to="/privacy" className="underline">
                Política de Privacidade
              </Link>{' '}
            </p>
            <Button
              disabled={isSubmitting}
              className="w-full rounded"
              type="submit"
            >
              Cadastrar
            </Button>
          </form>

          <Button
            asChild
            variant={'link'}
            className="bottom-2 max-h-fit rounded border border-red-500"
          >
            <Link to="/signin">
              <p>Já tenho conta!</p>
              <span className="underline"> </span>
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
