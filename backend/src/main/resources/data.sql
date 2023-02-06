INSERT INTO tb_user (name, email, password) VALUES ('Alex', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Maria', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);


INSERT INTO tb_course (name, area) VALUES ('Engenharia Mecânica', 'Exatas');
INSERT INTO tb_course (name, area) VALUES ('Engenharia de Software', 'Exatas');
INSERT INTO tb_course (name, area) VALUES ('Engenharia Civil', 'Exatas');
INSERT INTO tb_course (name, area) VALUES ('Engenharia de Produção', 'Exatas');
INSERT INTO tb_course (name, area) VALUES ('Engenharia de Energia', 'Exatas');
INSERT INTO tb_course (name, area) VALUES ('Medicina', 'Saúde');
INSERT INTO tb_course (name, area) VALUES ('Psicologia', 'Saúde');
INSERT INTO tb_course (name, area) VALUES ('Educação Física (Bacharelado)', 'Saúde');
INSERT INTO tb_course (name, area) VALUES ('Educação Física (Licenciatura)', 'Saúde');
INSERT INTO tb_course (name, area) VALUES ('Direito', 'Humanas');


INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Augusto Petroli', 'Guto', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/14563310_1085906601524135_1623765704975454912_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MJYdPT-lWlsAX8pAcgC&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfC5QWPL5oV3fotg1PzRDVnalk3zDOL2VA4uzSHl5TjGuQ&oe=6407691B');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Eduardo Martins de Souza', 'Souza', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/37038449_1589579804487468_3845509916345237504_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Y_vdCAIOcgsAX86bdCG&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBMTzGdv4HYEwNh5sGr4kW5YN6meYdha6jqaSsxNCzYeQ&oe=64075537');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Emanuel Salvador Caldeira', 'Manu', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/20953323_1474993392588467_154280078201163307_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=hh4vNDVGvCsAX-5Co7Q&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfCF6qr-7HVUTTtZ2ViBuiFXzYTUQADj6GhSCWXBjSTDVg&oe=64076443');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Felipe Molinari Ranzan', 'Ranzan', 24, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/94615509_2537401363031462_7501876778714005504_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=V1LccsRYG8MAX_ulRKu&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBwQ-bQDvfmS5Kn_202b4rFxOF21fVZdfaYcd7bRDNyPA&oe=64075E26');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Felipe Rizzardo', 'Zardo', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/54516052_2120722684701678_2338961214270341120_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=6I8dn6b6nasAX9d9_Ef&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfDP5qoxTiiuY8h7NrDEClGhflZOcIBgMI6AFvwCrPgRAg&oe=64077FE3');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Guilherme Picoli Bauce', 'Bauce', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/21077796_1454098041363703_2815202368848562161_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qiw-wIMg8UgAX_4i4eP&_nc_oc=AQnQK9rJiVOP10xr-XhNRu5GBiSaVzXogIOKmiSy18sBJ9FijVh3reoZew83IlEd889W-6C46lXfMD-dlSCMj-ph&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBW_UHeCi5Jmgovxm0wtTRcLUEKKRCPWxGfa6y9d1relg&oe=64076BB1');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Lorenzo Benatti Bondan', 'Lore', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t39.30808-6/322157582_528791879187813_2602396226478462404_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gRWRNvhcNXwAX9Lqm52&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBgx5Mo-XFjlrFRDmhIOPifHUnKSqciaemttHplkhpfog&oe=63E4A3FE');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Luiz Bordin', 'Bordin', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t31.18172-8/28337028_1777799022279069_7726437063855831264_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=CayZ1EcXnkAAX8-i-Ej&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfC1bX7xa8kP0FnKE0VgH0Q8jAC2_1T4t9DZO3FNHw2XSw&oe=640751A7');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Maicon Gava', 'Maicon', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/153084162_117255650403052_1374379745059009673_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=N93i-nH4qqYAX-iqevR&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfDOWBOS0678pPc5r8WWgHGVRdKhYWRwo0pyfx1WPokJdg&oe=640786DA');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Rodrigo Chultz', 'Rodrigo', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/50333794_2157879437596110_5161500862345904128_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LPIWUXG1rVIAX8qjR-v&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfAYHHdnT9G_qeiXxX1qAkQBPbUYEJaasLnAeYmFn8HwMg&oe=64078825');


INSERT INTO tb_student_course (student_id, course_id) VALUES (1, 8);
INSERT INTO tb_student_course (student_id, course_id) VALUES (1, 9);
INSERT INTO tb_student_course (student_id, course_id) VALUES (2, 10);
INSERT INTO tb_student_course (student_id, course_id) VALUES (3, 3);
INSERT INTO tb_student_course (student_id, course_id) VALUES (4, 5);
INSERT INTO tb_student_course (student_id, course_id) VALUES (5, 4);
INSERT INTO tb_student_course (student_id, course_id) VALUES (6, 10);
INSERT INTO tb_student_course (student_id, course_id) VALUES (7, 1);
INSERT INTO tb_student_course (student_id, course_id) VALUES (7, 2);
INSERT INTO tb_student_course (student_id, course_id) VALUES (8, 7);
INSERT INTO tb_student_course (student_id, course_id) VALUES (9, 10);
INSERT INTO tb_student_course (student_id, course_id) VALUES (10, 6);