import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Toast } from './providers/toast';

@NgModule({
    imports: [IonicModule]
})
export class IonicNativeBrowserModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicNativeBrowserModule,
            providers: [
                Toast
            ]
        };
    }
}