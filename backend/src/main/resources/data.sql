INSERT INTO tb_user (name, email, password) VALUES ('Alex', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Maria', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);


INSERT INTO tb_course (name, area) VALUES ('Mechanical Engineering', 'Exact');
INSERT INTO tb_course (name, area) VALUES ('Software Engineering', 'Exact');
INSERT INTO tb_course (name, area) VALUES ('Civil Engineering', 'Exact');
INSERT INTO tb_course (name, area) VALUES ('Production Engineering', 'Exact');
INSERT INTO tb_course (name, area) VALUES ('Energy Engineering', 'Exact');
INSERT INTO tb_course (name, area) VALUES ('Physical Engineering', 'Exact');
INSERT INTO tb_course (name, area) VALUES ('Electrical Engineering', 'Exact');
INSERT INTO tb_course (name, area) VALUES ('Medicine', 'Health');
INSERT INTO tb_course (name, area) VALUES ('Biomedicine', 'Health');
INSERT INTO tb_course (name, area) VALUES ('Veterinary Medicine', 'Health');
INSERT INTO tb_course (name, area) VALUES ('Odontology', 'Health');
INSERT INTO tb_course (name, area) VALUES ('Psychology', 'Health');
INSERT INTO tb_course (name, area) VALUES ('Esthetics', 'Health');
INSERT INTO tb_course (name, area) VALUES ('Physical Education (Bachelor)', 'Health');
INSERT INTO tb_course (name, area) VALUES ('Physical Education (Degree)', 'Health');
INSERT INTO tb_course (name, area) VALUES ('Law', 'Humans');
INSERT INTO tb_course (name, area) VALUES ('Performing Arts', 'Humans');
INSERT INTO tb_course (name, area) VALUES ('Visual Arts', 'Humans');
INSERT INTO tb_course (name, area) VALUES ('Literature', 'Humans');
INSERT INTO tb_course (name, area) VALUES ('Business', 'Humans');
INSERT INTO tb_course (name, area) VALUES ('Design', 'Humans');
INSERT INTO tb_course (name, area) VALUES ('-', 'Humans');


INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Ana Paula Reginatto Tubiana', 'Ana', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/25348737_806171129566756_77180276428041200_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=NnhcHzqS4VAAX-4UkIl&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfDvBbAPobSQK7alSWcj6RAcoPrExNkzcXU6e7aNDUQyQw&oe=6408ADD7');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Augusto Petroli', 'Guto', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/14563310_1085906601524135_1623765704975454912_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MJYdPT-lWlsAX8pAcgC&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfC5QWPL5oV3fotg1PzRDVnalk3zDOL2VA4uzSHl5TjGuQ&oe=6407691B');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Carla Dambroz Pelegrin', 'Carla', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/94713901_1650515595103766_6449498835008880640_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KJ04a19KkRIAX9YQCBb&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBzHbVFO7YaJJPOTjVh6oNf9ccTWPlDzuQt--raqTM7VQ&oe=640897AD');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Caroline Carraro', 'Carol', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t39.30808-6/318098126_5735510663236643_7558046925635438848_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KMFIhFJvQPYAX8UW5yi&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfDFaTTk9Nm8CrDL5cTXJHzrbhOW8OH-u7jcqugzajMS1w&oe=63E5EC45');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Eduarda Pastorello', 'Duda', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t39.30808-6/299987477_5619222551474288_3438934943394843105_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lwUUL0a7rcgAX_9yjhe&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfDLcqEiOcGStNWnmvzvFDoqhcINp7_IxeO3y3HpOkEE2Q&oe=63E6544C');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Eduarda Zorzi Trevisan', 'Zorzi', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/52391261_1892845317509805_4953524582934904832_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z3RbVxNH9oEAX_VBuyQ&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfDwKz-5sRzonOsXdgxELiniOocvagmKED6NPh4NDKC_cA&oe=6408A425');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Eduardo Martins de Souza', 'Souza', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/37038449_1589579804487468_3845509916345237504_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Y_vdCAIOcgsAX86bdCG&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBMTzGdv4HYEwNh5sGr4kW5YN6meYdha6jqaSsxNCzYeQ&oe=64075537');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Emanuel Salvador Caldeira', 'Manu', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/20953323_1474993392588467_154280078201163307_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=hh4vNDVGvCsAX-5Co7Q&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfCF6qr-7HVUTTtZ2ViBuiFXzYTUQADj6GhSCWXBjSTDVg&oe=64076443');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Emilly Vitória de Oliveira Freitas', 'Emilly', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/21616420_887182688101571_3626848237573920997_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=enbofJhOzKoAX8Uq5at&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBRHbXbsfrm4FgfavkM7rEPffK7l63nrua6-UZWXmuvog&oe=6408A6DF');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Felipe Molinari Ranzan', 'Ranzan', 24, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/94615509_2537401363031462_7501876778714005504_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=V1LccsRYG8MAX_ulRKu&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBwQ-bQDvfmS5Kn_202b4rFxOF21fVZdfaYcd7bRDNyPA&oe=64075E26');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Felipe Rizzardo', 'Zardo', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/54516052_2120722684701678_2338961214270341120_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=6I8dn6b6nasAX9d9_Ef&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfDP5qoxTiiuY8h7NrDEClGhflZOcIBgMI6AFvwCrPgRAg&oe=64077FE3');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Gabriela Andreolla Locatelli', 'Gabi', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t39.30808-6/297495331_1942088679330112_3780595747130533046_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EQYcsKPAFhwAX_vOa7a&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBhHN9NoB50cdYJrsYipV2NaNLYvdq8o0FQaGsIv1RlvA&oe=63E6DF08');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Gabriela Ferronato', 'Ferronato', 24, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/16473112_576708252525631_2469721058939737704_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=lPimF7IaPGcAX_82RoO&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfC2WPmBAVSbWOY1g029vwATLUPVBXKbkNY9DmiNyNWOUA&oe=6408A1D4');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Gabrielle Masutti Batisti', 'Batisti', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t39.30808-1/310171794_5456985317669828_6024211231436230953_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YMdXWDowAsUAX-EdLiG&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfC6MNcNWb5H-lSa2WOrENpTPysIPmScOEUTbnH-Nh9I8g&oe=63E5707F');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Giovanni Guidolin', 'Gio', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/184048682_3914993608586264_6404145089839178106_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mHiFvVyaqbgAX_PeSsI&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfA5z6gMnpBTUdSbfXKnYV5j9Z8gEhixY-LCN_exVw2c7Q&oe=64088ABF');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Guilherme Heuser de Almeida', 'Almeida', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/15442265_804053033069453_3683611457378239886_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lSA0MRVSR00AX-9ydOp&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBnMbcd-nb1XVHoecg50ypudCIWA38PW57ZChm0AOGfPw&oe=64088C97');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Guilherme Picoli Bauce', 'Bauce', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/21077796_1454098041363703_2815202368848562161_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qiw-wIMg8UgAX_4i4eP&_nc_oc=AQnQK9rJiVOP10xr-XhNRu5GBiSaVzXogIOKmiSy18sBJ9FijVh3reoZew83IlEd889W-6C46lXfMD-dlSCMj-ph&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBW_UHeCi5Jmgovxm0wtTRcLUEKKRCPWxGfa6y9d1relg&oe=64076BB1');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Jonathan Guidolin Franceschini', 'Johny', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/86174446_1986638281482169_1712315298121515008_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=MxTruQypFooAX_UAP_y&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfCZXkO3AmcznY753X7iPeEQKo5sanVk2LPIEsZ3YGT9-g&oe=64088B90');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Julia Dalla Costa', 'Julia', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/16266097_1094938443947879_8350991413155619446_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=DK9PVlrB26sAX9gODRR&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfDWgQQjfSa3QGX-IuN5ch2YPnj-wFvgAlzPXD5Jfxk8pQ&oe=6408AEF0');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Julia Gheno Pertile', 'Pertile', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t39.30808-6/280602678_1643524042674751_4616928669852349079_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6EMNYBvbTBYAX-iFyki&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfCpizrwH2gwXQfRtsnYQsIW1JjJeZ2ZwfDNK2kRpKJFyQ&oe=63E60D49');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Lorenzo Benatti Bondan', 'Lore', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t39.30808-6/322157582_528791879187813_2602396226478462404_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gRWRNvhcNXwAX9Lqm52&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBgx5Mo-XFjlrFRDmhIOPifHUnKSqciaemttHplkhpfog&oe=63E4A3FE');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Lucas Fabichaki Tognon', 'Tognon', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t39.30808-6/317794864_835327124246592_8654845150584322758_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=9XpjxCa6NI0AX8mvy6x&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfBR3VEEfquiQQE7K0RXaZGsEYr5g6oF8xK3IjkT7LI1cg&oe=63E644A2');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Luiz Eduardo Bordin', 'Bordin', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t39.30808-6/277808380_4972815772798047_1339600115020234036_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=ngPY-oFGl4MAX81eIrq&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfCB_1nTwKSs32-R_Dxt5CRO3iprloZpPDUfiFDUAJECUw&oe=63E605F1');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Luiza Nunes Conzatti', 'Luiza', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.18169-9/27972231_1170545303114476_5893041972856526115_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=F1XeER8tREMAX-GdJ5b&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfD0BZ6El0ed7T-5ba8uYIWot5v8kP3bdrZyvCp9baVwlg&oe=6408A861');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Maicon Gava', 'Maicon', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/153084162_117255650403052_1374379745059009673_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=N93i-nH4qqYAX-iqevR&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfDOWBOS0678pPc5r8WWgHGVRdKhYWRwo0pyfx1WPokJdg&oe=640786DA');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Maurício Todescatto Baudassarelli', 'Mauri', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t39.30808-6/217030220_4129638593793650_5025777492262532397_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ih52knN5Bu4AX-GMbHz&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfDOinJ7pkDLCjE8KNTRO4X4DXhSkvXPIqO83ZWtr80u3A&oe=63E639CB');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Nicole Tabaldi Sanson', 'Nicole', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/81647903_2813188665405185_6169119568879943680_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wEtfejU1w50AX9uHEG1&tn=ifq07eqRiQkYdwV8&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfCZrBHn8FewY6bsfoZdSvHkZ_mFCSIaVO_KT9yw-ewfOw&oe=6408A060');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Rodrigo Chultz', 'Rodrigo', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/74908168_2639417009442348_7264608461567033344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=yf7bJHibmp4AX9peix4&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfD06itLcGGHuu44WUaM6IJtVgJNzO5kTCoKd53t-yPTRg&oe=64088BFD');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Thomaz Cantoni', 'Thomaz', 23, true, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t39.30808-6/287540190_5397690173603208_5416714295533154648_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JtydJU3PKhMAX-m-cv6&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfCngwd1wE47Hq5YXIOgsCYys0ZET3RBR6eIB7MVsgEa2w&oe=63E5C635');
INSERT INTO tb_student (name, nickname, age, graduated, img_Url) VALUES ('Vinicius Mocelin Guidolin', 'Vini', 23, false, 'https://scontent.fcxj12-1.fna.fbcdn.net/v/t1.6435-9/29314369_1223877654423672_2554521959249477632_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-6wpsIsZwBUAX8yXBem&tn=ifq07eqRiQkYdwV8&_nc_ht=scontent.fcxj12-1.fna&oh=00_AfCR6LeBCA8xe2Z7R7k2P_ncRI3M8ZrHNla3oGHS6nYukg&oe=640888C0');

INSERT INTO tb_student_course (student_id, course_id) VALUES (1, 8);
INSERT INTO tb_student_course (student_id, course_id) VALUES (2, 14);
INSERT INTO tb_student_course (student_id, course_id) VALUES (2, 15);
INSERT INTO tb_student_course (student_id, course_id) VALUES (3, 17);
INSERT INTO tb_student_course (student_id, course_id) VALUES (4, 8);
INSERT INTO tb_student_course (student_id, course_id) VALUES (5, 8);
INSERT INTO tb_student_course (student_id, course_id) VALUES (6, 10);
INSERT INTO tb_student_course (student_id, course_id) VALUES (7, 16);
INSERT INTO tb_student_course (student_id, course_id) VALUES (8, 3);
INSERT INTO tb_student_course (student_id, course_id) VALUES (9, 13);
INSERT INTO tb_student_course (student_id, course_id) VALUES (10, 5);
INSERT INTO tb_student_course (student_id, course_id) VALUES (11, 4);
INSERT INTO tb_student_course (student_id, course_id) VALUES (12, 19);
INSERT INTO tb_student_course (student_id, course_id) VALUES (13, 9);
INSERT INTO tb_student_course (student_id, course_id) VALUES (14, 21);
INSERT INTO tb_student_course (student_id, course_id) VALUES (15, 20);
INSERT INTO tb_student_course (student_id, course_id) VALUES (16, 8);
INSERT INTO tb_student_course (student_id, course_id) VALUES (17, 16);
INSERT INTO tb_student_course (student_id, course_id) VALUES (18, 7);
INSERT INTO tb_student_course (student_id, course_id) VALUES (19, 6);
INSERT INTO tb_student_course (student_id, course_id) VALUES (20, 10);
INSERT INTO tb_student_course (student_id, course_id) VALUES (21, 2);
INSERT INTO tb_student_course (student_id, course_id) VALUES (21, 1);
INSERT INTO tb_student_course (student_id, course_id) VALUES (22, 22);
INSERT INTO tb_student_course (student_id, course_id) VALUES (23, 12);
INSERT INTO tb_student_course (student_id, course_id) VALUES (24, 18);
INSERT INTO tb_student_course (student_id, course_id) VALUES (25, 22);
INSERT INTO tb_student_course (student_id, course_id) VALUES (26, 1);
INSERT INTO tb_student_course (student_id, course_id) VALUES (27, 11);
INSERT INTO tb_student_course (student_id, course_id) VALUES (28, 8);
INSERT INTO tb_student_course (student_id, course_id) VALUES (29, 21);
INSERT INTO tb_student_course (student_id, course_id) VALUES (30, 1);





