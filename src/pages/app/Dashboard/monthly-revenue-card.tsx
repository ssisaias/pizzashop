import { DollarSign } from 'lucide-react'
import { useQuery } from 'react-query'

import { getMonthlyRevenue } from '@/api/get-monthly-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthlyRevenueCard() {
  const { data: monthlyRevenue } = useQuery({
    queryFn: getMonthlyRevenue,
    queryKey: ['metrics', 'monthly-revenue'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total no mês
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthlyRevenue?.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyRevenue.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthlyRevenue.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthlyRevenue.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
