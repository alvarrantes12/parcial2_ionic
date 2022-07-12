import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
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
            <IonCard
              color='dark'
              style={{
                minWidth: '80%',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            >
              <IonCardHeader>
                <IonCardSubtitle>Content</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {Object.keys(content).map((key) => {
                  if (key === 'id') return null
                  return <IonText color='light'>{content[key]}</IonText>
                })}
              </IonCardContent>
            </IonCard>
          </IonItem>
        )
      })}
    </IonList>
  )
}

export default List
