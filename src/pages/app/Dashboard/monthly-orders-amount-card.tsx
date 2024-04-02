import { Utensils } from 'lucide-react'
import { useQuery } from 'react-query'

import { getMonthlyOrdersAmount } from '@/api/get-monthly-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthOrdersAmountCard() {
  const { data: monthlyOrdersAmount } = useQuery({
    queryFn: getMonthlyOrdersAmount,
    queryKey: ['metrics', 'monthly-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos no mês
        </CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthlyOrdersAmount.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthlyOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthlyOrdersAmount.diffFromLastMonth}%
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
