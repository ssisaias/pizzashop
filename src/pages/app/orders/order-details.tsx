import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 123456</DialogTitle>
        <DialogDescription>
          <span>Cliente: </span>
          <strong>João da Silva</strong>
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                <span className="font-medium text-muted-foreground">
                  Joaão da Silva
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">telefone</TableCell>
              <TableCell className="flex justify-end">
                <span className="font-medium text-muted-foreground">
                  654321
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                <span className="font-medium text-muted-foreground">
                  teste@email.com
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Data do Pedido
              </TableCell>
              <TableCell className="flex justify-end">
                <span className="font-medium text-muted-foreground">
                  01/01/2021
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Qtd.</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Pizza SuperPepperoni</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell className="text-right">R$ 60</TableCell>
            <TableCell className="text-right">R$ 120</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell className="text-right font-medium">R$ 120</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </DialogContent>
  )
}
