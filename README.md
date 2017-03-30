```ts
import { Toast as ToastMock } from 'ionic-native-browser';
import { Toast } from '@ionic-native/toast';

@NgModule({

  providers: [
    { provide: Toast, useClass: ToastMock }
  ]

})

```