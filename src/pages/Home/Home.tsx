import UseApi from '../../components/UseApi';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import List from '../../components/List';


function Home() {
    const {data} = UseApi(`${process.env.REACT_APP_API_URL}/special_contents`);
    if(!data) {
        return <h1>Cargando...</h1>
    } else {
        return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Exam 2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <List />
            </IonContent>    
        </IonPage>
        )
    }

}

export default Home;