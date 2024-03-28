import { Building, ChevronDown, LogOut } from 'lucide-react'
import { useQuery } from 'react-query'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { getProfile } from '@/api/get-profile'

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
  const { data: profileData, isLoading: isLoadingProfileData } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })
  const { data: restaurantData, isLoading: isLoadingRestaurantData } = useQuery(
    {
      queryKey: ['managedRestaurant'],
      queryFn: getManagedRestaurant,
    },
  )

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
          <DropdownMenuItem className="text-rose-600 dark:text-rose-400">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <StoreProfileDialog />
    </Dialog>
  )
}
