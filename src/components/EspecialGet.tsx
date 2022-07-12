import { IonCard } from "@ionic/react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonContent,
    IonButton,
    IonTitle,
} from "@ionic/react";
import UseApi from "./Api";

const GetEspecial = ({ method }: any) => {
    const { data} = UseApi(`${process.env.REACT_APP_API_URL}/special_contents`);

    return (
        <IonCard>
            
            {data?.map((content: any) => {
                return (
                    <IonCard key={content.id}>
                        <IonCardHeader>
                            <IonCardSubtitle> ID:  {content?.id}</IonCardSubtitle>
                            <IonCardSubtitle> Nombre:  {content?.name}</IonCardSubtitle>
                            <IonCardSubtitle> Premier:  {content?.description}</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                )
            })}

        </IonCard>
    );
};

export default GetEspecial;