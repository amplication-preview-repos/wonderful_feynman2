import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FocusSessionService } from "./focusSession.service";
import { FocusSessionControllerBase } from "./base/focusSession.controller.base";

@swagger.ApiTags("focusSessions")
@common.Controller("focusSessions")
export class FocusSessionController extends FocusSessionControllerBase {
  constructor(protected readonly service: FocusSessionService) {
    super(service);
  }
}
