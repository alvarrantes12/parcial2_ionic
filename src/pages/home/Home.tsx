import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import UseApi from '../../components/UseApi';
import ShowComponent from '../../components/ShowComponent';

const Home: React.FC = () => {

  const {data} = UseApi(`${process.env.REACT_APP_API_URL}/contents`);
    if(!data){
        return <h1>Loading ...</h1>
    }else{
        return (
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Contents</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent >
                <ShowComponent/>
              </IonContent>
            </IonPage>
          );
    }
  
};

export default Home;
