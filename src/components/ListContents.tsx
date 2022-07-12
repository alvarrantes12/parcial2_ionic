import UseApi from './UseApi'
import { IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/react';

type Props = {
  data: any;
};

const ListContents = ({data}: Props) => {
  return (
    <IonCard>
      {
        data?.map((content: any)=>{
          return (
            <IonCard>
              <IonCardHeader>                
                <IonCardSubtitle>Nombre: {content?.name}</IonCardSubtitle>
                <IonCardSubtitle>Descripcion: {content?.description}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          )
        })
      }
    </IonCard>
  );
}

export default ListContents;