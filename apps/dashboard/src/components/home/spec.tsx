import { Card } from "@get-cart/ui/components/tremor";

type Props = {
  title: string;
  value: string;
};

function Spec({ title, value }: Props) {
  return (
    <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        {title}
      </p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {value}
      </p>
    </Card>
  );
}

export default Spec;
