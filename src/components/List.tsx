import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonList,
  IonText,
} from '@ionic/react'
import './List.css'
type Props = {
  data: any
}

const List = ({ data }: Props) => {
  if (!data) return <h1> Cargando...</h1>
  return (
    <IonList>
      {data?.map((content: any) => {
        return (
          <IonItem key={`${content?.id}`}>
            <IonCard class='content-card'>
              <IonCardHeader>
                <IonCardTitle class='content-name'>
                  {content?.name}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonText class='content-description'>
                  {content?.description}
                </IonText>
              </IonCardContent>
            </IonCard>
          </IonItem>
        )
      })}
    </IonList>
  )
}

export default List
