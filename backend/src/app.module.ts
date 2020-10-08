import {Module} from '@nestjs/common';

import {EducationService} from './education/education.service';
import {LanguageService} from './language/language.service';
import {ParagraphService} from './paragraph/paragraph.service';
import {PositionsService} from './positions/positions.service';
import { UserService } from './user/user.service';
import {WorkhistoryService} from './workhistory/workhistory.service';
import {EducationController} from './education/education.controller';
import {LanguageController} from './language/language.controller';
import {ParagraphController} from './paragraph/paragraph.controller';
import {PositionsController} from './positions/positions.controller';
import { UserController } from './user/user.controller';
import {WorkhistoryController} from './workhistory/workhistory.controller';

@Module({
  imports: [],
  controllers: [EducationController, LanguageController, ParagraphController, PositionsController, UserController, WorkhistoryController],
  providers: [EducationService, LanguageService, ParagraphService, PositionsService, UserService, WorkhistoryService],
})
export class AppModule {}
