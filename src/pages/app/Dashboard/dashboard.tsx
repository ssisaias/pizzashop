import { Helmet } from 'react-helmet-async'

import { DailyOrdersAmountCard } from './daily-orders-amount-card'
import { MonthlyCanceledOrdersCard } from './monthly-canceled-orders'
import { MonthOrdersAmountCard } from './monthly-orders-amount-card'
import { MonthlyRevenueCard } from './monthly-revenue-card'
import { PopularProductsChart } from './popular-products-chart.tsx'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthlyRevenueCard />
          <MonthOrdersAmountCard />
          <DailyOrdersAmountCard />
          <MonthlyCanceledOrdersCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart></RevenueChart>
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
