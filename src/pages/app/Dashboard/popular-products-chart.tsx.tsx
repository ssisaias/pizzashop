import { BarChart, Loader2 } from 'lucide-react'
import { useQuery } from 'react-query'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import colors from 'tailwindcss/colors'

import { getPopularProducts } from '@/api/get-popular-products'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const COLORS = [
  colors.sky[500],
  colors.rose[500],
  colors.violet[500],
  colors.orange[500],
  colors.green[500],
  colors.pink[500],
]

export function PopularProductsChart() {
  const { data: popularProductsData } = useQuery({
    queryFn: getPopularProducts,
    queryKey: ['metrics', 'popular-products'],
  })
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
        {popularProductsData ? (
          <ResponsiveContainer width="100%" height={240}>
            <PieChart style={{ fontSize: '12' }}>
              <Pie
                data={popularProductsData}
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
                      {popularProductsData[index].product.length > 10
                        ? popularProductsData[index].product
                            .substring(0, 10)
                            .concat('...')
                        : popularProductsData[index].product}{' '}
                      ({value})
                    </text>
                  )
                }}
              >
                {popularProductsData.map((_, idx) => {
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
        ) : (
          <div className="h-240 flex w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
