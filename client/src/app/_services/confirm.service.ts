import { inject, Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ConfirmDialogComponent } from '../modals/confirm-dialog/confirm-dialog.component';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  bsModelRef?: BsModalRef;
  private modalService = inject(BsModalService);
  
  confirm(
    title = 'Confirmation',
    message = 'Are you sure you want to do this',
    btnOkText = 'Ok',
    btnCancelText = 'Cancel'
  ) {
    const config: ModalOptions = {
      initialState : {
        title,
        message,
        btnOkText,
        btnCancelText
      }
    };

    this.bsModelRef = this.modalService.show(ConfirmDialogComponent, config);
    return this.bsModelRef.onHidden?.pipe(
      map(() => {
        if(this.bsModelRef?.content){
          return this.bsModelRef.content.result;
        }else return false;
      })
    )
  }
}
