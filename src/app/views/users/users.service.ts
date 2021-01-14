import { UserModel } from './users.model';

export class UserService {
	users: UserModel[] = [
		new UserModel(
			"aalcoriza",
			"D0004146",
			"Heritage Glass Products (Aust) Pty Ltd",
			"In Use",
			"Abigael",
			"Alcoriza",
			"aalcoriza@heritageglass.com.au",
			"Hewlett-Packard",
			"HP Z640 Workstation",
			"Mini Tower",
			"11/8/2017",
			"Microsoft Windows 10 Pro",
			32768,
			"Intel(R) Xeon(R) CPU E5-2620 v4 @ 2.10GHz [8 core(s) x86_64]",
			"",
			""
		),
		new UserModel(
			"awilliams",
			"L0004025",
			"Heritage Glass Products (Aust) Pty Ltd",
			"In Use",
			"Alan",
			"Williams",
			"awilliams@heritageglass.com.au",
			"LENOVO",
			"20F90012AU",
			"Notebook",
			"2/27/2017",
			"Microsoft Windows 10 Pro",
			8192,
			"Intel(R) Core(TM) i7-6600U CPU @ 2.60GHz [2 core(s) x86_64]",
			"",
			""
		)
	];

	getUsers() {
		return this.users;
	}

	getUser(index:number) {
		return this.users[index];
	}
}
