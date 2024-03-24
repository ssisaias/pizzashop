import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'
export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="tetx-lg flex items-center gap-3 font-medium text-foreground">
          <Pizza className="h-5 w-5"></Pizza>
          <span className="font-semibold">PizzaShop</span>
        </div>
        <footer>
          Painel do parceiro &copy; pizzashop {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
