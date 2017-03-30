import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { ToastOptions } from '@ionic-native/toast';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class Toast {

    constructor(private toastCtrl: ToastController) {}

    show(message: string, duration: any, position: string): Observable<any> {
        return new Observable<any>((observer: Observer<any>) => {
            this.toastCtrl.create({
                message,
                duration: this.getNumericDuration(duration),
                position
            });
            return () => {};
        });
    }

    hide(): Promise<any> { return Promise.resolve(); }

    showWithOptions(options: ToastOptions): Observable<any> {
        return this.show(options.message, options.duration, options.position);
    }

    showShortTop(message: string): Observable<any> {
        return this.show(message, 'short', 'top');
    }

    showShortCenter(message: string): Observable<any> {
        return this.show(message, 'short', 'center');
    }

    showShortBottom(message: string): Observable<any> {
        return this.show(message, 'short', 'bottom');
    }

    showLongTop(message: string): Observable<any> {
        return this.show(message, 'long', 'top');
    }

    showLongCenter(message: string): Observable<any> {
        return this.show(message, 'long', 'center');
    }

    showLongBottom(message: string): Observable<any> {
        return this.show(message, 'long', 'bottom');
    }

    private getNumericDuration(duration: any) {
        if (typeof duration === 'number') {
            return duration;
        } else {
            return {
                short: 2000,
                long: 4000
            }[duration];
        }
    }

}