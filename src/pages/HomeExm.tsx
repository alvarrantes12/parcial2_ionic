import React from "react";
import{
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonContent,
    IonButton,
    IonTitle
} from "@ionic/react"
import ApiExm from "../components/ApiExm";


const HomeExm: React.FC = () => {
    const {data} = ApiExm(`${process.env.REACT_APP_API_URL}/contents`);
    if(!data){
        return <h1>Cargando......</h1>
    }else{
        return(<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Lab 5 Ionic
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
              {data?.map((content: any) => {
                return (
                <IonCard key= {content.id}>
                    <IonCardHeader >
                        <IonCardSubtitle> Id {content?.name}</IonCardSubtitle>
                    </IonCardHeader>
                    </IonCard>
                )
              })}

            </IonContent>
        </IonPage>)
    }
};

export default HomeExm;