import { ActionSheetOptions } from '@ionic-native/action-sheet';
import { Injectable } from '@angular/core';
import { ActionSheetController, ActionSheet as ActionSheetInstance } from 'ionic-angular';

@Injectable()
export class ActionSheet {

    private actionSheet: ActionSheetInstance;

    constructor(private actionSheetCtrl: ActionSheetController) {}

    show(options: ActionSheetOptions): Promise<any> {
        this.actionSheet = this.actionSheetCtrl.create({
            title: options.title,
            buttons: options.buttonLabels
        });
        this.actionSheet.present();
        return new Promise<any>(resolve => this.actionSheet.onDidDismiss(data => resolve(data)));
    }

    hide(options?: ActionSheetOptions): Promise<any> {
        if (this.actionSheet) {
            this.actionSheet.dismiss();
        }
        return Promise.resolve();
    }

}