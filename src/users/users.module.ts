import { Module, OnModuleInit, Logger } from '@nestjs/common';  // Add Logger & OnModuleInit
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema';
import { UsersSeeder } from './users.seeder';  // Import seeder

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, UsersSeeder],  // Add seeder here
  exports: [UsersService, UsersSeeder],  // Export if other modules need 'em
})
export class UsersModule implements OnModuleInit {  // Make module implement OnModuleInit
  private readonly logger = new Logger(UsersModule.name);

  constructor(private readonly seeder: UsersSeeder) {}  // Inject seeder

  async onModuleInit() {
    try {
      await this.seeder.seed();
      this.logger.log('Seeding completed successfully!');
    } catch (error) {
      this.logger.error('Seeding failed—proceeding without sample data:', error.message);
    }
  }
}