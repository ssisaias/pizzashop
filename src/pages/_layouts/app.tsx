import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1>cabecalho</h1>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}