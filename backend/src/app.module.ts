import {Module} from '@nestjs/common';
import {ServeStaticModule} from '@nestjs/serve-static';

import {EducationService} from './education/education.service';
import {LanguageService} from './language/language.service';
import {ParagraphService} from './paragraph/paragraph.service';
import {PositionService} from './position/position.service';
import {UserService} from './user/user.service';
import {WorkhistoryService} from './workhistory/workhistory.service';
import {EducationController} from './education/education.controller';
import {LanguageController} from './language/language.controller';
import {ParagraphController} from './paragraph/paragraph.controller';
import {PositionController} from './position/position.controller';
import {UserController} from './user/user.controller';
import {WorkhistoryController} from './workhistory/workhistory.controller';
import {join} from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client')
    })
  ],
  controllers: [EducationController, LanguageController, ParagraphController, PositionController, UserController, WorkhistoryController],
  providers: [EducationService, LanguageService, ParagraphService, PositionService, UserService, WorkhistoryService],
})
export class AppModule {}
