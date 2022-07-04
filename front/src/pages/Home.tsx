import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, {useState, useEffect} from 'react';

const Home: React.FC = () => {

  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/fitbit_auth").then(
      res => res.json()
    ).then(
      data => {
        setData(data.url)
        console.log(data.url)
      }
    )
  }, []);

  return (
    <IonPage>
        <IonCard>
            <IonCardContent>
                <IonButton href={'' + data[0]}>Authorize</IonButton>
            </IonCardContent>
        </IonCard>
    </IonPage>
  );
};

export default Home;
