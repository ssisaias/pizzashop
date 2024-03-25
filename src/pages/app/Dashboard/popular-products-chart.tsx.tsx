import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const mockData = [
  { name: 'mussarela', amount: 10 },
  { name: 'Super Pepperoni', amount: 20 },
  { name: 'Calabresa', amount: 50 },
  { name: 'Frango', amount: 5 },
  { name: 'Carne do Sol', amount: 69 },
]

const COLORS = [
  colors.sky[500],
  colors.rose[500],
  colors.violet[500],
  colors.orange[500],
  colors.green[500],
  colors.pink[500],
]

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="front-mediem text-base">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground"></BarChart>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: '12' }}>
            <Pie
              data={mockData}
              dataKey={'amount'}
              nameKey={'name'}
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={4}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="text=sx fill-muted-foreground"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {mockData[index].name.length > 10
                      ? mockData[index].name.substring(0, 10).concat('...')
                      : mockData[index].name}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {mockData.map((_, idx) => {
                return (
                  <Cell
                    key={`cell${idx}`}
                    fill={COLORS[idx]}
                    className="hover:brightness-125"
                  />
                )
              })}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
