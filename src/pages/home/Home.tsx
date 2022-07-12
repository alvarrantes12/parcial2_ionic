import React from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonContent,
    IonTitle
} from "@ionic/react";
import UseApi from "../../components/UseApi";
import "./Home.css";
const Home: React.FC = () => {
    const { data } = UseApi(`${process.env.REACT_APP_API_URL}/contents`); 

    if (!data) {
        return <h1>Cargando...</h1>
    } else {
        return (
            <IonPage>
              <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            API Data
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {data?.map((content: any) => {
                        return (
                            <IonCard className="Card" key={content.id}>
                                <IonCardHeader>
                                    <IonCardSubtitle className="Content"> ID: {content?.id} | Nombre: {content?.name}  
                                     | Descripcion: {content?.description} | </IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        )
                    })}
                </IonContent>

            </IonPage>

            
        )
    }


};

export default Home;