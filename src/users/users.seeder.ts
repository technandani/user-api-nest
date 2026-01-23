import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersSeeder {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async seed() {
    const users = [
      { name: 'Nandani singh', age: 22, role: 'admin' },
      { name: 'Priyanka singh', age: 22, role: 'user' },
    ];

    for (const userData of users) {
      const exists = await this.userModel.findOne({ name: userData.name });
      if (!exists) {
        await this.userModel.create(userData);
        console.log(`Seeded: ${userData.name}`);
      } else {
        console.log(`Exists: ${userData.name}`);
      }
    }
    console.log('Seeding completed!');
  }
}