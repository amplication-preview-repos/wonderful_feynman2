import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FocusSessionServiceBase } from "./base/focusSession.service.base";

@Injectable()
export class FocusSessionService extends FocusSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
