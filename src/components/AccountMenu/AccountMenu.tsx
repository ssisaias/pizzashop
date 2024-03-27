import { Building, ChevronDown, LogOut } from 'lucide-react'
import { useQuery } from 'react-query'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { getProfile } from '@/api/get-profile'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function AccountMenu() {
  const { data: profileData } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })
  const { data: restaurantData } = useQuery({
    queryKey: ['managedRestaurant'],
    queryFn: getManagedRestaurant,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'outline'}
          className="flex select-none items-center gap-2 rounded"
        >
          {restaurantData?.name} <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>{profileData?.name}</span>
          <span className="text-cs font-normal text-muted-foreground">
            {profileData?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span>Perfil da Loja</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-rose-600 dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
