// pages/api/saveMeet.js
import clientPromise from '../../lib/mongodb'
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { UpdateFilter } from 'mongodb';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { menteeName, menteePhoneNumber, menteeEmail, bookedTime, mentorId } = req.body;
      
      // اتصال به دیتابیس با استفاده از clientPromise شما
      const client = await clientPromise;
      const database = client.db('mentoring'); // گرفتن دیتابیس
      const collection = database.collection('mentors'); 
      
      // Create a new object with the meet data
      // const newMeetData = {
      //   menteeName,
      //   menteePhoneNumber,
      //   menteeEmail,
      //   bookedTime: new Date(bookedTime),
      // };
      
      const newMeetData: {
        menteeName: string;
        menteePhoneNumber: string;
        menteeEmail: string;
        bookedTime: Date;
      } = {
        menteeName, 
        menteePhoneNumber,
        menteeEmail,
        bookedTime: new Date(bookedTime),
      };
      
      // تعیین نوع داده‌ای مناسب برای $push
      const pushOperator: { meets: any } = { meets: newMeetData };
      
      // Find the mentor by mentorId and push the newMeetData to the meets array
      const conditions = {
        mentorId: parseInt(mentorId),
      };
      
      const meet = await collection.findOneAndUpdate(
        { $and: [conditions] },
        { $push: pushOperator },
      );

      
      
      
      const mentor = await collection.findOne({ mentorId: parseInt(mentorId) });
      console.log(`mentor is : ${JSON.stringify(mentor)}`);
      
      if(mentor){
        const availableTimes = mentor.availableTimes;
        const availableTime = mentor.availableTime;
        
        var currentIndex = -1;
        for (let i = 0; i < availableTimes.length; i++) {
          if (availableTime.getTime() === availableTimes[i].getTime()) {
            currentIndex = i;
          }
        }
        
        if (currentIndex !== -1) {
          console.log("in condition");
          mentor.availableTime = availableTimes[currentIndex + 1];
          console.log(mentor.availableTime);
          
          await collection.findOneAndUpdate(
            { mentorId: parseInt(mentorId) },
            { $set: { availableTime: mentor.availableTime } }
          );
        }
      }else{
        throw new Error(`Mentor not found with id : ${mentorId}`);
      }
      
      // client.close();
      
      res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Error saving data' });
    }
  } else {
    res.status(405).end();
  }
}
