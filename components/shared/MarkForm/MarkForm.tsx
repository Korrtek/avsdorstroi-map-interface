import style from './MarkForm.module.scss'
import { Container } from '@/components/ui/Container/Container';
import { Input } from '@/components/ui/Input/Input';
interface Props {
    className?: string;
}

export const MarkForm: React.FC<Props> = ( { className }) => {
  return (
    <Container>
    <div className={style.markForm}>
            <Input
            label="Название"
            placeholder="Курьер №1"
            />
            <Input
            label="Широта"
            placeholder="широта"
            />
            <Input
            label="Долгота"
            placeholder="Долгота"
            />
            <Input
            label="Email"
            placeholder="mail@example.com"
            type="email"
            />
            <Input
            label="Телефон"
            placeholder="Телефон +7(800)5553535"
            type="tel"
            />
            <Input
            label="Часы работы"
            placeholder="Пн-пт, 9:00 - 19:00"
            />
            <Input
            label="Название Компании"
            placeholder="ООО Название компании"
            />
           
    </div>
    </Container>
  );
};