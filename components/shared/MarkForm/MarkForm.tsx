'use client'
import styles from './MarkForm.module.scss'
import { Container } from '@/components/ui/Container/Container';
import { Input } from '@/components/ui/Input/Input';
import { MapComponent } from '../MapComponent/MapComponent';
import { useState } from 'react';
interface Props {
    className?: string;
}
// Форма, в которую будут заноситься данные для метки, при внесении данных в поля с широтой и долготой будет происходить взаимодейсткие с картой
export const MarkForm: React.FC<Props> = ( { className }) => {
  
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([58.002407, 58.002407])


  return (
    <Container>
      <div className={styles.markForm}>
        <div className={styles.markFormWrapper}>
          <div className={styles.markColumn} >

          
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
        <div className={styles.mapWrapper}>
        <div className={styles.mapContainer}>

          
        <MapComponent
        markerPosition={markerPosition}
        
        />
        </div>
        </div>
      </div>
    </div>
  </Container>
  );
};