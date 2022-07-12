import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonText,
  IonButton,
  IonContent,
  IonItem,
} from '@ionic/react'
import UseApi from './UseApi'

type Props = {
  data: any;
};

const List = ({data}: Props) => {

    return (
      <IonCard>
                {data?.map((content: any) => {
                  return (
                  <IonCard className="Movie__Card" key= {content.id}>
                      <IonCardHeader >
                          <IonCardSubtitle className="Movie__Category"> Id: {content?.id}</IonCardSubtitle>
                          <IonCardSubtitle className="Movie__Category"> Nombre: {content?.name}</IonCardSubtitle>
                          <IonCardSubtitle className="Movie__Category"> Descripcion: {content?.description}</IonCardSubtitle>
                      </IonCardHeader>
                  </IonCard>
                  )
              })}      
      </IonCard>
  )

}

export default List;