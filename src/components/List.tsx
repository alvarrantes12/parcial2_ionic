import { IonCard, IonCardHeader, IonCardSubtitle, IonButton } from '@ionic/react';
import UseApi from './UseApi';


const List: React.FC = () => {

    const {data} = UseApi(`${process.env.REACT_APP_API_URL}/special_contents`);

    return (
        <div>
            {data?.map((special_content: any) => {
                return (
                    <IonCard key={special_content.id}>
                        <IonCardHeader>
                            <IonCardSubtitle>Nombre: {special_content?.name}</IonCardSubtitle>
                            <IonCardSubtitle>Descripción: {special_content?.description}</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                )
            })}
        </div>
    )
}

export default List;