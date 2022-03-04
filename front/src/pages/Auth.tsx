import React, {useState, useEffect} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import './Auth.css'

const Auth: React.FC = () =>{

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/fitbit_auth").then(
      res => res.json()
    ).then(
      data => {
        setData(data.url)
        console.log(data)
      }
    )
  }, [])


  return (
    <IonPage>
        <IonCard>
            <IonCardContent>
                <IonButton href={'' + data[0]}>Authorize</IonButton>
            </IonCardContent>
        </IonCard>
    </IonPage>
  )
}

export default Auth