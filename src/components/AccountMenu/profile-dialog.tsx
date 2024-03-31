import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'sonner'
import { z } from 'zod'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { updateProfile } from '@/api/update-profile'

import { Button } from '../ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
  const { data: restaurantData } = useQuery({
    queryKey: ['managedRestaurant'],
    queryFn: getManagedRestaurant,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: restaurantData?.name ?? '',
      description: restaurantData?.description ?? '',
    },
  })

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })

      toast.success('Perfil atualizado.')
    } catch (error) {
      toast.error('Erro ao atualizar...' + error)
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>Atualize seus dados</DialogDescription>
      </DialogHeader>
      <DialogContent></DialogContent>
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input
              className="col-span-3"
              id="name"
              {...register('name')}
            ></Input>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            ></Textarea>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button disabled={isSubmitting} variant={'ghost'}>
              Cancelar
            </Button>
          </DialogClose>
          <Button disabled={isSubmitting} variant={'success'}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
