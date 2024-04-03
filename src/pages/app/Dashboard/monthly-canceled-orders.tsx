import { HeartCrack } from 'lucide-react'
import { useQuery } from 'react-query'

import { getMonthlyCanceledOrdersAmount } from '@/api/get-monthly-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthlyCanceledOrdersCard() {
  const { data: monthlyCanceledOrdersAmount } = useQuery({
    queryFn: getMonthlyCanceledOrdersAmount,
    queryKey: ['metrics', 'monthly-canceled-orders-amount'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos no mês
        </CardTitle>
        <HeartCrack className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyCanceledOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthlyCanceledOrdersAmount.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthlyCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthlyCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
