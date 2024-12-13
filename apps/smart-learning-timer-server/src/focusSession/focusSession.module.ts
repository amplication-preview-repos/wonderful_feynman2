import { Module } from "@nestjs/common";
import { FocusSessionModuleBase } from "./base/focusSession.module.base";
import { FocusSessionService } from "./focusSession.service";
import { FocusSessionController } from "./focusSession.controller";
import { FocusSessionResolver } from "./focusSession.resolver";

@Module({
  imports: [FocusSessionModuleBase],
  controllers: [FocusSessionController],
  providers: [FocusSessionService, FocusSessionResolver],
  exports: [FocusSessionService],
})
export class FocusSessionModule {}
