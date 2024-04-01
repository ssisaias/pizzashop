import { Building, ChevronDown, LogOut } from 'lucide-react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { getProfile } from '@/api/get-profile'
import { signOut } from '@/api/sign-out'

import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Skeleton } from '../ui/skeleton'
import { StoreProfileDialog } from './profile-dialog'

export function AccountMenu() {
  const navigate = useNavigate()
  const { data: profileData, isLoading: isLoadingProfileData } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity, // this tells react-query to never refetch this query automatically (e.g. window regains focus)
  })
  const { data: restaurantData, isLoading: isLoadingRestaurantData } = useQuery(
    {
      queryKey: ['managedRestaurant'],
      queryFn: getManagedRestaurant,
    },
  )

  const { mutateAsync: signOutFn, isLoading: isLeaving } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/signin', { replace: true })
    },
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'outline'}
            className="flex select-none items-center gap-2 rounded"
          >
            {isLoadingRestaurantData ? (
              <Skeleton className="h-4 w-44" />
            ) : (
              <span>{restaurantData?.name}</span>
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingProfileData ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
            ) : (
              <>
                <span>{profileData?.name}</span>
                <span className="text-cs font-normal text-muted-foreground">
                  {profileData?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 h-4 w-4" />
              <span>Perfil da Loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            asChild
            className="text-rose-600 dark:text-rose-400"
            disabled={isLeaving}
          >
            <button className="w-full" onClick={() => signOutFn()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <StoreProfileDialog />
    </Dialog>
  )
}
