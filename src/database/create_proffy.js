module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {
  // insert data on teacher's table
  const insertedProffy = await db.run(`
    INSERT INTO proffys (
      name,
      avatar,
      whatsapp,
      bio
    ) VALUES (
      "${proffyValue.name}",
      "${proffyValue.avatar}",
      "${proffyValue.whatsapp}",
      "${proffyValue.bio}"
    );
  `)

  const proffy_id = insertedProffy.lastID

  // insert data on classes' table

  const insertedClass = await db.run(`
    INSERT INTO classes (
      subject,
      cost,
      proffy_id
    ) VALUES (
      "${classValue.subject}",
      "${classValue.cost}",
      "${proffy_id}"
    );
  `)

  const class_id = insertedClass.lastID

  // Insert data on class_schedule table
  const insertedAllClassSchedulesValues = classScheduleValues.map((classScheduleValue) => {
    return db.run(`
      INSERT INTO class_schedule (
        class_id,
        weekday,
        time_from,
        time_to
      ) VALUES (
        ${class_id},
        ${classScheduleValue.weekday},
        ${classScheduleValue.time_from},
        ${classScheduleValue.time_to}
      );
    `)
  })

  // Here all class_schedules db.runs() are executed
  await Promise.all(insertedAllClassSchedulesValues)


  // await db.run()
}