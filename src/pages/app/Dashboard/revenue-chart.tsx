import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const mockData = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 500 },
  { date: '12/12', revenue: 600 },
  { date: '13/12', revenue: 111 },
  { date: '14/12', revenue: 69 },
  { date: '15/12', revenue: 1500 },
  { date: '16/12', revenue: 1 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="front-mediem text-base">
            Receita no Período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={mockData} style={{ fontSize: '12' }}>
            <XAxis dataKey={'date'} tickLine={false} axisLine={false} dy={15} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={90}
              tickFormatter={(value: number) => {
                return `${value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}`
              }}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type={'linear'}
              strokeWidth={2}
              dataKey={'revenue'}
              stroke={colors.violet[500]}
            />
            <Tooltip labelStyle={{ color: colors.slate[400] }}></Tooltip>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
