export interface IState {
  title?: string;
  user?:string
  amount?: number;
  date?: string|Date;
  children?: React.ReactNode;
  className?: string;
  items?: IState[];
  id?: string
  dataPoints?: any[]
  value?: any
  maxValue?: any
  label?: string
  expenses?: any
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  onSaveExpenseData?:(expenseData:any)=>void
}

