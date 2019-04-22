import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class MsgService {

    constructor(
        public toastr: ToastrService
    ) {

    }

    showSuccess(msg: string, msg2: string) {
        this.toastr.success(msg2, msg, { progressBar: true });
    }

    showWarning(msg: string, msg2: string) {
        this.toastr.warning(msg2, msg);
    }

    showInfo(msg: string, msg2: string) {
        this.toastr.info(msg2, msg);
    }

    showError(err: any) {
        debugger;
        if (err.error) {
            let msgBody = err.error.msg;
            
            if (msgBody.split(' ')[0] == "E11000") {
                if (msgBody.includes("username")) {
                    this.toastr.error("Username is taken.", "Oops!");
                } else if (msgBody.includes("email")) {
                    this.toastr.error("Email is already registered!", "Did we meet already?");
                }
            }

            if (err.error.msg == "Invalid login credentials") {
                this.toastr.error("Invalid login credentials","Invalid Invalid Invalid");
            }
        }
    }
}