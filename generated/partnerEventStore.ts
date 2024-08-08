export interface partnerEventStore {
	m_PendingInfoPromise: any;
	m_PendingInfoResolve: any;
	m_QueuedEventTimeout: {
		m_fnCallback: any;
		m_schTimer: any;

		Cancel();
		IsScheduled();
		Schedule(e, t);
	};
	m_bLoadedFromConfig: boolean;
	m_mapAdjacentAnnouncementGIDs: Map<any, any>;
	m_mapAnnouncementBodyToEvent: Map<
		string,
		{
			0: string;
			1: string;
			10: string;
			11: string;
			12: string;
			13: string;
			14: string;
			15: string;
			16: string;
			17: string;
			18: string;
			2: string;
			3: string;
			4: string;
			5: string;
			6: string;
			7: string;
			8: string;
			9: string;
		}
	>;
	m_mapAppIDToGIDs: Map<
		number,
		{
			0: string;
			1: string;

			function();
			function();
			function(t, r);
			function(t, r);
			function(t, r);
			function(t, r);
			function(t, r);
			function(t, r);
			function();
			function(t, r);
			function(t, r);
			function();
			function();
			function();
			function();
			function(t, r);
			function();
			function();
			function();
			function();
			function();
			function();
			function();
			function(t, r);
			function();
			function(e, t);
			function();
			function();
			function();
		}
	>;
	m_mapClanToGIDs: Map<
		number,
		{
			0: string;
			1: string;

			function();
			function();
			function(t, r);
			function(t, r);
			function(t, r);
			function(t, r);
			function(t, r);
			function(t, r);
			function();
			function(t, r);
			function(t, r);
			function();
			function();
			function();
			function();
			function(t, r);
			function();
			function();
			function();
			function();
			function();
			function();
			function();
			function(t, r);
			function();
			function(e, t);
			function();
			function();
			function();
		}
	>;
	m_mapEventUpdateCallback: Map<any, any>;
	m_mapExistingEvents: Map<
		string,
		{
			AnnouncementGID: string;
			GID: string;
			announcementClanSteamID: {
				m_ulSteamID: {
					high: number;
					low: number;
					unsigned: boolean;

					function(e);
					function(e);
					function();
					function(e);
					function(e);
					function();
					function();
					function();
					function(e);
					function(e);
					function(e);
					function(e);
					function();
					function(e);
					function();
					function();
					function();
					function();
					function();
					function(e);
					function(e);
					function(e);
					function(e);
					function();
					function();
					function();
					function();
					function();
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function();
					function();
					function(e);
					function();
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function();
					function();
					function();
					function();
					function();
					function(e);
					function();
					function(e);
				};

				BIsClanAccount();
				BIsIndividualAccount();
				BIsValid();
				ConvertTo64BitString();
				GetAccountID();
				GetAccountType();
				GetInstance();
				GetUniverse();
				Render();
				SetAccountID(e);
				SetAccountType(e);
				SetFromComponents(e, t, r, i);
				SetInstance(e);
				SetUniverse(e);
			};
			appid: number;
			bLoaded: boolean;
			bOldAnnouncement: boolean;
			broadcaster: any;
			clanSteamID: {
				m_ulSteamID: {
					high: number;
					low: number;
					unsigned: boolean;

					function(e);
					function(e);
					function();
					function(e);
					function(e);
					function();
					function();
					function();
					function(e);
					function(e);
					function(e);
					function(e);
					function();
					function(e);
					function();
					function();
					function();
					function();
					function();
					function(e);
					function(e);
					function(e);
					function(e);
					function();
					function();
					function();
					function();
					function();
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function();
					function();
					function(e);
					function();
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function(e);
					function();
					function();
					function();
					function();
					function();
					function(e);
					function();
					function(e);
				};

				BIsClanAccount();
				BIsIndividualAccount();
				BIsValid();
				ConvertTo64BitString();
				GetAccountID();
				GetAccountType();
				GetInstance();
				GetUniverse();
				Render();
				SetAccountID(e);
				SetAccountType(e);
				SetFromComponents(e, t, r, i);
				SetInstance(e);
				SetUniverse(e);
			};
			comment_type: string;
			creator_steamid: string;
			deleteInProgress: boolean;
			description: Map<
				number,
				{
					0: string;
					1: string;
					10: string;
					100: string;
					1000: string;
					1001: string;
					1002: string;
					1003: string;
					1004: string;
					1005: string;
					1006: string;
					1007: string;
					1008: string;
					1009: string;
					101: string;
					1010: string;
					1011: string;
					1012: string;
					1013: string;
					1014: string;
					1015: string;
					1016: string;
					1017: string;
					1018: string;
					1019: string;
					102: string;
					1020: string;
					1021: string;
					1022: string;
					1023: string;
					1024: string;
					1025: string;
					1026: string;
					1027: string;
					1028: string;
					1029: string;
					103: string;
					1030: string;
					1031: string;
					1032: string;
					1033: string;
					1034: string;
					1035: string;
					1036: string;
					1037: string;
					1038: string;
					1039: string;
					104: string;
					1040: string;
					1041: string;
					1042: string;
					1043: string;
					1044: string;
					1045: string;
					1046: string;
					1047: string;
					1048: string;
					1049: string;
					105: string;
					1050: string;
					1051: string;
					1052: string;
					1053: string;
					1054: string;
					1055: string;
					1056: string;
					1057: string;
					1058: string;
					1059: string;
					106: string;
					1060: string;
					1061: string;
					1062: string;
					1063: string;
					1064: string;
					1065: string;
					1066: string;
					1067: string;
					1068: string;
					1069: string;
					107: string;
					1070: string;
					1071: string;
					1072: string;
					1073: string;
					1074: string;
					1075: string;
					1076: string;
					1077: string;
					1078: string;
					1079: string;
					108: string;
					1080: string;
					1081: string;
					1082: string;
					1083: string;
					1084: string;
					1085: string;
					1086: string;
					1087: string;
					1088: string;
					1089: string;
					109: string;
					1090: string;
					1091: string;
					1092: string;
					1093: string;
					1094: string;
					1095: string;
					1096: string;
					1097: string;
					1098: string;
					1099: string;
					11: string;
					110: string;
					1100: string;
					1101: string;
					1102: string;
					1103: string;
					1104: string;
					1105: string;
					1106: string;
					1107: string;
					1108: string;
					1109: string;
					111: string;
					1110: string;
					1111: string;
					1112: string;
					1113: string;
					1114: string;
					1115: string;
					1116: string;
					1117: string;
					1118: string;
					1119: string;
					112: string;
					1120: string;
					1121: string;
					1122: string;
					1123: string;
					1124: string;
					1125: string;
					1126: string;
					1127: string;
					1128: string;
					1129: string;
					113: string;
					1130: string;
					1131: string;
					1132: string;
					1133: string;
					1134: string;
					1135: string;
					1136: string;
					1137: string;
					1138: string;
					1139: string;
					114: string;
					1140: string;
					1141: string;
					1142: string;
					1143: string;
					1144: string;
					1145: string;
					1146: string;
					1147: string;
					1148: string;
					1149: string;
					115: string;
					1150: string;
					1151: string;
					1152: string;
					1153: string;
					1154: string;
					1155: string;
					1156: string;
					1157: string;
					1158: string;
					1159: string;
					116: string;
					1160: string;
					1161: string;
					1162: string;
					1163: string;
					1164: string;
					1165: string;
					1166: string;
					1167: string;
					1168: string;
					1169: string;
					117: string;
					1170: string;
					1171: string;
					1172: string;
					1173: string;
					1174: string;
					1175: string;
					1176: string;
					1177: string;
					1178: string;
					1179: string;
					118: string;
					1180: string;
					1181: string;
					1182: string;
					1183: string;
					1184: string;
					1185: string;
					1186: string;
					1187: string;
					1188: string;
					1189: string;
					119: string;
					1190: string;
					1191: string;
					1192: string;
					1193: string;
					1194: string;
					1195: string;
					1196: string;
					1197: string;
					1198: string;
					1199: string;
					12: string;
					120: string;
					1200: string;
					1201: string;
					1202: string;
					1203: string;
					1204: string;
					1205: string;
					1206: string;
					1207: string;
					1208: string;
					1209: string;
					121: string;
					1210: string;
					1211: string;
					1212: string;
					1213: string;
					1214: string;
					1215: string;
					1216: string;
					1217: string;
					1218: string;
					1219: string;
					122: string;
					1220: string;
					1221: string;
					1222: string;
					1223: string;
					1224: string;
					1225: string;
					1226: string;
					1227: string;
					1228: string;
					1229: string;
					123: string;
					1230: string;
					1231: string;
					1232: string;
					1233: string;
					1234: string;
					1235: string;
					1236: string;
					1237: string;
					1238: string;
					1239: string;
					124: string;
					1240: string;
					1241: string;
					1242: string;
					1243: string;
					1244: string;
					1245: string;
					1246: string;
					1247: string;
					1248: string;
					1249: string;
					125: string;
					1250: string;
					1251: string;
					1252: string;
					1253: string;
					1254: string;
					1255: string;
					1256: string;
					1257: string;
					1258: string;
					1259: string;
					126: string;
					1260: string;
					1261: string;
					1262: string;
					1263: string;
					1264: string;
					1265: string;
					1266: string;
					1267: string;
					1268: string;
					1269: string;
					127: string;
					1270: string;
					1271: string;
					1272: string;
					1273: string;
					1274: string;
					1275: string;
					1276: string;
					1277: string;
					1278: string;
					1279: string;
					128: string;
					1280: string;
					1281: string;
					1282: string;
					1283: string;
					1284: string;
					1285: string;
					1286: string;
					1287: string;
					1288: string;
					1289: string;
					129: string;
					1290: string;
					1291: string;
					1292: string;
					1293: string;
					1294: string;
					1295: string;
					1296: string;
					1297: string;
					1298: string;
					1299: string;
					13: string;
					130: string;
					1300: string;
					1301: string;
					1302: string;
					1303: string;
					1304: string;
					1305: string;
					1306: string;
					1307: string;
					1308: string;
					1309: string;
					131: string;
					1310: string;
					1311: string;
					1312: string;
					1313: string;
					1314: string;
					1315: string;
					1316: string;
					1317: string;
					1318: string;
					1319: string;
					132: string;
					1320: string;
					1321: string;
					1322: string;
					1323: string;
					1324: string;
					1325: string;
					1326: string;
					1327: string;
					1328: string;
					1329: string;
					133: string;
					1330: string;
					1331: string;
					1332: string;
					1333: string;
					1334: string;
					1335: string;
					1336: string;
					1337: string;
					1338: string;
					1339: string;
					134: string;
					1340: string;
					135: string;
					136: string;
					137: string;
					138: string;
					139: string;
					14: string;
					140: string;
					141: string;
					142: string;
					143: string;
					144: string;
					145: string;
					146: string;
					147: string;
					148: string;
					149: string;
					15: string;
					150: string;
					151: string;
					152: string;
					153: string;
					154: string;
					155: string;
					156: string;
					157: string;
					158: string;
					159: string;
					16: string;
					160: string;
					161: string;
					162: string;
					163: string;
					164: string;
					165: string;
					166: string;
					167: string;
					168: string;
					169: string;
					17: string;
					170: string;
					171: string;
					172: string;
					173: string;
					174: string;
					175: string;
					176: string;
					177: string;
					178: string;
					179: string;
					18: string;
					180: string;
					181: string;
					182: string;
					183: string;
					184: string;
					185: string;
					186: string;
					187: string;
					188: string;
					189: string;
					19: string;
					190: string;
					191: string;
					192: string;
					193: string;
					194: string;
					195: string;
					196: string;
					197: string;
					198: string;
					199: string;
					2: string;
					20: string;
					200: string;
					201: string;
					202: string;
					203: string;
					204: string;
					205: string;
					206: string;
					207: string;
					208: string;
					209: string;
					21: string;
					210: string;
					211: string;
					212: string;
					213: string;
					214: string;
					215: string;
					216: string;
					217: string;
					218: string;
					219: string;
					22: string;
					220: string;
					221: string;
					222: string;
					223: string;
					224: string;
					225: string;
					226: string;
					227: string;
					228: string;
					229: string;
					23: string;
					230: string;
					231: string;
					232: string;
					233: string;
					234: string;
					235: string;
					236: string;
					237: string;
					238: string;
					239: string;
					24: string;
					240: string;
					241: string;
					242: string;
					243: string;
					244: string;
					245: string;
					246: string;
					247: string;
					248: string;
					249: string;
					25: string;
					250: string;
					251: string;
					252: string;
					253: string;
					254: string;
					255: string;
					256: string;
					257: string;
					258: string;
					259: string;
					26: string;
					260: string;
					261: string;
					262: string;
					263: string;
					264: string;
					265: string;
					266: string;
					267: string;
					268: string;
					269: string;
					27: string;
					270: string;
					271: string;
					272: string;
					273: string;
					274: string;
					275: string;
					276: string;
					277: string;
					278: string;
					279: string;
					28: string;
					280: string;
					281: string;
					282: string;
					283: string;
					284: string;
					285: string;
					286: string;
					287: string;
					288: string;
					289: string;
					29: string;
					290: string;
					291: string;
					292: string;
					293: string;
					294: string;
					295: string;
					296: string;
					297: string;
					298: string;
					299: string;
					3: string;
					30: string;
					300: string;
					301: string;
					302: string;
					303: string;
					304: string;
					305: string;
					306: string;
					307: string;
					308: string;
					309: string;
					31: string;
					310: string;
					311: string;
					312: string;
					313: string;
					314: string;
					315: string;
					316: string;
					317: string;
					318: string;
					319: string;
					32: string;
					320: string;
					321: string;
					322: string;
					323: string;
					324: string;
					325: string;
					326: string;
					327: string;
					328: string;
					329: string;
					33: string;
					330: string;
					331: string;
					332: string;
					333: string;
					334: string;
					335: string;
					336: string;
					337: string;
					338: string;
					339: string;
					34: string;
					340: string;
					341: string;
					342: string;
					343: string;
					344: string;
					345: string;
					346: string;
					347: string;
					348: string;
					349: string;
					35: string;
					350: string;
					351: string;
					352: string;
					353: string;
					354: string;
					355: string;
					356: string;
					357: string;
					358: string;
					359: string;
					36: string;
					360: string;
					361: string;
					362: string;
					363: string;
					364: string;
					365: string;
					366: string;
					367: string;
					368: string;
					369: string;
					37: string;
					370: string;
					371: string;
					372: string;
					373: string;
					374: string;
					375: string;
					376: string;
					377: string;
					378: string;
					379: string;
					38: string;
					380: string;
					381: string;
					382: string;
					383: string;
					384: string;
					385: string;
					386: string;
					387: string;
					388: string;
					389: string;
					39: string;
					390: string;
					391: string;
					392: string;
					393: string;
					394: string;
					395: string;
					396: string;
					397: string;
					398: string;
					399: string;
					4: string;
					40: string;
					400: string;
					401: string;
					402: string;
					403: string;
					404: string;
					405: string;
					406: string;
					407: string;
					408: string;
					409: string;
					41: string;
					410: string;
					411: string;
					412: string;
					413: string;
					414: string;
					415: string;
					416: string;
					417: string;
					418: string;
					419: string;
					42: string;
					420: string;
					421: string;
					422: string;
					423: string;
					424: string;
					425: string;
					426: string;
					427: string;
					428: string;
					429: string;
					43: string;
					430: string;
					431: string;
					432: string;
					433: string;
					434: string;
					435: string;
					436: string;
					437: string;
					438: string;
					439: string;
					44: string;
					440: string;
					441: string;
					442: string;
					443: string;
					444: string;
					445: string;
					446: string;
					447: string;
					448: string;
					449: string;
					45: string;
					450: string;
					451: string;
					452: string;
					453: string;
					454: string;
					455: string;
					456: string;
					457: string;
					458: string;
					459: string;
					46: string;
					460: string;
					461: string;
					462: string;
					463: string;
					464: string;
					465: string;
					466: string;
					467: string;
					468: string;
					469: string;
					47: string;
					470: string;
					471: string;
					472: string;
					473: string;
					474: string;
					475: string;
					476: string;
					477: string;
					478: string;
					479: string;
					48: string;
					480: string;
					481: string;
					482: string;
					483: string;
					484: string;
					485: string;
					486: string;
					487: string;
					488: string;
					489: string;
					49: string;
					490: string;
					491: string;
					492: string;
					493: string;
					494: string;
					495: string;
					496: string;
					497: string;
					498: string;
					499: string;
					5: string;
					50: string;
					500: string;
					501: string;
					502: string;
					503: string;
					504: string;
					505: string;
					506: string;
					507: string;
					508: string;
					509: string;
					51: string;
					510: string;
					511: string;
					512: string;
					513: string;
					514: string;
					515: string;
					516: string;
					517: string;
					518: string;
					519: string;
					52: string;
					520: string;
					521: string;
					522: string;
					523: string;
					524: string;
					525: string;
					526: string;
					527: string;
					528: string;
					529: string;
					53: string;
					530: string;
					531: string;
					532: string;
					533: string;
					534: string;
					535: string;
					536: string;
					537: string;
					538: string;
					539: string;
					54: string;
					540: string;
					541: string;
					542: string;
					543: string;
					544: string;
					545: string;
					546: string;
					547: string;
					548: string;
					549: string;
					55: string;
					550: string;
					551: string;
					552: string;
					553: string;
					554: string;
					555: string;
					556: string;
					557: string;
					558: string;
					559: string;
					56: string;
					560: string;
					561: string;
					562: string;
					563: string;
					564: string;
					565: string;
					566: string;
					567: string;
					568: string;
					569: string;
					57: string;
					570: string;
					571: string;
					572: string;
					573: string;
					574: string;
					575: string;
					576: string;
					577: string;
					578: string;
					579: string;
					58: string;
					580: string;
					581: string;
					582: string;
					583: string;
					584: string;
					585: string;
					586: string;
					587: string;
					588: string;
					589: string;
					59: string;
					590: string;
					591: string;
					592: string;
					593: string;
					594: string;
					595: string;
					596: string;
					597: string;
					598: string;
					599: string;
					6: string;
					60: string;
					600: string;
					601: string;
					602: string;
					603: string;
					604: string;
					605: string;
					606: string;
					607: string;
					608: string;
					609: string;
					61: string;
					610: string;
					611: string;
					612: string;
					613: string;
					614: string;
					615: string;
					616: string;
					617: string;
					618: string;
					619: string;
					62: string;
					620: string;
					621: string;
					622: string;
					623: string;
					624: string;
					625: string;
					626: string;
					627: string;
					628: string;
					629: string;
					63: string;
					630: string;
					631: string;
					632: string;
					633: string;
					634: string;
					635: string;
					636: string;
					637: string;
					638: string;
					639: string;
					64: string;
					640: string;
					641: string;
					642: string;
					643: string;
					644: string;
					645: string;
					646: string;
					647: string;
					648: string;
					649: string;
					65: string;
					650: string;
					651: string;
					652: string;
					653: string;
					654: string;
					655: string;
					656: string;
					657: string;
					658: string;
					659: string;
					66: string;
					660: string;
					661: string;
					662: string;
					663: string;
					664: string;
					665: string;
					666: string;
					667: string;
					668: string;
					669: string;
					67: string;
					670: string;
					671: string;
					672: string;
					673: string;
					674: string;
					675: string;
					676: string;
					677: string;
					678: string;
					679: string;
					68: string;
					680: string;
					681: string;
					682: string;
					683: string;
					684: string;
					685: string;
					686: string;
					687: string;
					688: string;
					689: string;
					69: string;
					690: string;
					691: string;
					692: string;
					693: string;
					694: string;
					695: string;
					696: string;
					697: string;
					698: string;
					699: string;
					7: string;
					70: string;
					700: string;
					701: string;
					702: string;
					703: string;
					704: string;
					705: string;
					706: string;
					707: string;
					708: string;
					709: string;
					71: string;
					710: string;
					711: string;
					712: string;
					713: string;
					714: string;
					715: string;
					716: string;
					717: string;
					718: string;
					719: string;
					72: string;
					720: string;
					721: string;
					722: string;
					723: string;
					724: string;
					725: string;
					726: string;
					727: string;
					728: string;
					729: string;
					73: string;
					730: string;
					731: string;
					732: string;
					733: string;
					734: string;
					735: string;
					736: string;
					737: string;
					738: string;
					739: string;
					74: string;
					740: string;
					741: string;
					742: string;
					743: string;
					744: string;
					745: string;
					746: string;
					747: string;
					748: string;
					749: string;
					75: string;
					750: string;
					751: string;
					752: string;
					753: string;
					754: string;
					755: string;
					756: string;
					757: string;
					758: string;
					759: string;
					76: string;
					760: string;
					761: string;
					762: string;
					763: string;
					764: string;
					765: string;
					766: string;
					767: string;
					768: string;
					769: string;
					77: string;
					770: string;
					771: string;
					772: string;
					773: string;
					774: string;
					775: string;
					776: string;
					777: string;
					778: string;
					779: string;
					78: string;
					780: string;
					781: string;
					782: string;
					783: string;
					784: string;
					785: string;
					786: string;
					787: string;
					788: string;
					789: string;
					79: string;
					790: string;
					791: string;
					792: string;
					793: string;
					794: string;
					795: string;
					796: string;
					797: string;
					798: string;
					799: string;
					8: string;
					80: string;
					800: string;
					801: string;
					802: string;
					803: string;
					804: string;
					805: string;
					806: string;
					807: string;
					808: string;
					809: string;
					81: string;
					810: string;
					811: string;
					812: string;
					813: string;
					814: string;
					815: string;
					816: string;
					817: string;
					818: string;
					819: string;
					82: string;
					820: string;
					821: string;
					822: string;
					823: string;
					824: string;
					825: string;
					826: string;
					827: string;
					828: string;
					829: string;
					83: string;
					830: string;
					831: string;
					832: string;
					833: string;
					834: string;
					835: string;
					836: string;
					837: string;
					838: string;
					839: string;
					84: string;
					840: string;
					841: string;
					842: string;
					843: string;
					844: string;
					845: string;
					846: string;
					847: string;
					848: string;
					849: string;
					85: string;
					850: string;
					851: string;
					852: string;
					853: string;
					854: string;
					855: string;
					856: string;
					857: string;
					858: string;
					859: string;
					86: string;
					860: string;
					861: string;
					862: string;
					863: string;
					864: string;
					865: string;
					866: string;
					867: string;
					868: string;
					869: string;
					87: string;
					870: string;
					871: string;
					872: string;
					873: string;
					874: string;
					875: string;
					876: string;
					877: string;
					878: string;
					879: string;
					88: string;
					880: string;
					881: string;
					882: string;
					883: string;
					884: string;
					885: string;
					886: string;
					887: string;
					888: string;
					889: string;
					89: string;
					890: string;
					891: string;
					892: string;
					893: string;
					894: string;
					895: string;
					896: string;
					897: string;
					898: string;
					899: string;
					9: string;
					90: string;
					900: string;
					901: string;
					902: string;
					903: string;
					904: string;
					905: string;
					906: string;
					907: string;
					908: string;
					909: string;
					91: string;
					910: string;
					911: string;
					912: string;
					913: string;
					914: string;
					915: string;
					916: string;
					917: string;
					918: string;
					919: string;
					92: string;
					920: string;
					921: string;
					922: string;
					923: string;
					924: string;
					925: string;
					926: string;
					927: string;
					928: string;
					929: string;
					93: string;
					930: string;
					931: string;
					932: string;
					933: string;
					934: string;
					935: string;
					936: string;
					937: string;
					938: string;
					939: string;
					94: string;
					940: string;
					941: string;
					942: string;
					943: string;
					944: string;
					945: string;
					946: string;
					947: string;
					948: string;
					949: string;
					95: string;
					950: string;
					951: string;
					952: string;
					953: string;
					954: string;
					955: string;
					956: string;
					957: string;
					958: string;
					959: string;
					96: string;
					960: string;
					961: string;
					962: string;
					963: string;
					964: string;
					965: string;
					966: string;
					967: string;
					968: string;
					969: string;
					97: string;
					970: string;
					971: string;
					972: string;
					973: string;
					974: string;
					975: string;
					976: string;
					977: string;
					978: string;
					979: string;
					98: string;
					980: string;
					981: string;
					982: string;
					983: string;
					984: string;
					985: string;
					986: string;
					987: string;
					988: string;
					989: string;
					99: string;
					990: string;
					991: string;
					992: string;
					993: string;
					994: string;
					995: string;
					996: string;
					997: string;
					998: string;
					999: string;
				}
			>;
			endTime: number;
			featured_app_tagid: number;
			forumTopicGID: string;
			gidfeature: string;
			gidfeature2: string;
			has_live_stream: any;
			jsondata: {
				bBroadcastEnabled: boolean;
				bSaleEnabled: boolean;
				bScheduleEnabled: boolean;
				broadcastChatSetting: string;
				broadcast_whitelist: any[];
				default_broadcast_title: string;
				localized_broadcast_left_image: { undefined }[];
				localized_broadcast_right_image: { undefined }[];
				localized_broadcast_title: { undefined }[];
				localized_capsule_image: string[];
				localized_sale_header: { undefined }[];
				localized_sale_logo: { undefined }[];
				localized_sale_overlay: { undefined }[];
				localized_sale_product_banner: { undefined }[];
				localized_sale_product_mobile_banner: { undefined }[];
				localized_subtitle: { undefined }[];
				localized_summary: { undefined }[];
				localized_title_image: { undefined }[];
				referenced_appids: any[];
				sale_background_color: string;
				sale_browsemore_bgcolor: string;
				sale_browsemore_color: string;
				sale_browsemore_text: string;
				sale_browsemore_url: string;
				sale_font: string;
				sale_header_offset: number;
				sale_sections: any[];
				sale_show_creator: boolean;
				scheduleEntries: any[];
				valve_access_log: { rtUpdated: number; strSteamID: string }[];
			};
			last_update_steamid: string;
			live_stream_viewer_count: any;
			loadedAllLanguages: boolean;
			m_nBuildID: number;
			m_overrideCurrentDay: any;
			m_strBuildBranch: string;
			nCommentCount: number;
			nVotesDown: number;
			nVotesUp: number;
			name: Map<
				number,
				{
					0: string;
					1: string;
					10: string;
					11: string;
					12: string;
					13: string;
					14: string;
					15: string;
					16: string;
					17: string;
					18: string;
					19: string;
					2: string;
					20: string;
					21: string;
					22: string;
					23: string;
					24: string;
					25: string;
					26: string;
					27: string;
					28: string;
					29: string;
					3: string;
					30: string;
					31: string;
					32: string;
					33: string;
					34: string;
					35: string;
					4: string;
					5: string;
					6: string;
					7: string;
					8: string;
					9: string;
				}
			>;
			postTime: number;
			rtime32_last_local_modification: any;
			rtime32_last_modified: number;
			rtime32_last_solr_search_col_updated: number;
			rtime32_moderator_reviewed: number;
			startTime: number;
			timestamp_loc_updated: Map<any, any>;
			type: number;
			vecTags: string[];
			video_preview_id: any;
			video_preview_type: any;
			visibilityEndTime: number;
			visibilityStartTime: number;
			visibility_state: number;

			BAllowedSteamStoreSpotlight();
			BContentHubDiscountedOnly();
			BEventCanShowBroadcastWidget(e);
			BHasAnnouncementGID();
			BHasBroadcastEnabled();
			BHasBroadcastForceBanner();
			BHasEmailEnabled();
			BHasEventEnded();
			BHasForumTopicGID();
			BHasImage(e, t);
			BHasLibaryHomeSpotlight();
			BHasSaleEnabled();
			BHasSaleProductBanners();
			BHasSaleVanity();
			BHasScheduleEnabled();
			BHasSomeImage(e);
			BHasSubTitle(e);
			BHasSummary(e);
			BHasTag(e);
			BHasTagStartingWith(e);
			BImageNeedScreenshotFallback(e, t);
			BInRealmChina();
			BInRealmGlobal();
			BIsBackgroundImageGroupingEnabled();
			BIsBroadcastAccountIDWhiteListed(e);
			BIsEventActionEnabled();
			BIsEventInFuture();
			BIsImageSafeForAllAges(e, t);
			BIsLanguageValidForRealms(e);
			BIsLockedToGameOwners();
			BIsLockedToPartnerAppRights();
			BIsOGGEvent();
			BIsPartnerEvent();
			BIsStagedEvent();
			BIsVisibleEvent();
			BMatchesAllTags(e);
			BSaleShowBroadcastAtTopOfPage();
			BSaleShowCuratorRecommendationAtBottomOfPage();
			BShowLibrarySpotlight();
			BShowLibrarySpotlightText();
			BUseSubscriptionLayout();
			BUsesContentHubForItemSource();
			GenerateDynamicSaleSections(e, t, r, n);
			GetAllSalePageGroups();
			GetAllTags();
			GetAnnouncementGID();
			GetBroadcastChatVisibility();
			GetBroadcastTitle(e);
			GetBroadcastWhitelist();
			GetBroadcastWhitelistAsSteamIDs();
			GetCategoryAsString();
			GetContentHub();
			GetContentHubCategory();
			GetContentHubTag();
			GetContentHubType();
			GetDayIndexFromEventStart();
			GetDescriptionWithFallback(e);
			GetEndTimeAndDateUnixSeconds();
			GetEventType();
			GetEventTypeAsString();
			GetFallbackArtworkScreenshot();
			GetForumTopicURL();
			GetGameTitle(e);
			GetImageForSizeAsArrayWithFallback(e, t, r, n);
			GetImageFromBeginningOfDescription(e, t);
			GetImageHash(e, t = 0);
			GetImageHashAndExt(e, t = 0);
			GetImageURL(e, t = 0, r = m.wI.full);
			GetImageURLWithFallback(e, t, r = m.wI.full);
			GetImgArray(e);
			GetIncludedRealmList();
			GetLastReferencedSaleDay();
			GetLastReferencedSaleDayFromCapsules(e, t);
			GetNameWithFallback(e);
			GetPostTimeAndDateUnixSeconds();
			GetRequiredAppIDs();
			GetRequiredPackageIDs();
			GetRequiredPartnerAppRights();
			GetSaleFeaturedApps(e);
			GetSaleFeaturedAppsAndDemos(e);
			GetSaleFeaturedAppsAndDemosCount(e);
			GetSaleFeaturedAppsCount(e);
			GetSaleFeaturedBundles(e);
			GetSaleFeaturedBundlesCount(e);
			GetSaleFeaturedPackages(e);
			GetSaleFeaturedPackagesCount(e);
			GetSaleItemCountOfType(e, t);
			GetSaleItemOfType(e, t);
			GetSalePageBackgroundGroup(e);
			GetSalePageBackgroundImageGroupCount();
			GetSalePageGroupDefinition();
			GetSaleSectionByID(e);
			GetSaleSectionCount();
			GetSaleSectionFirstMatchByType(e);
			GetSaleSectionIncludingFooterSections();
			GetSaleSections();
			GetSaleSectionsByType(e);
			GetSaleURL();
			GetSaleVanity();
			GetStartTimeAndDateUnixSeconds();
			GetSteamAwardCategory();
			GetSteamAwardNomineeCategories();
			GetSubTitle(e);
			GetSubTitleWithLanguageFallback(e);
			GetSubTitleWithSummaryFallback(e);
			GetSummary(e);
			GetSummaryWithFallback(e, t);
			GetTaggedItems();
			GetValveAccessLog();
			GetVisibilityStartTimeAndDateUnixSeconds();
			UpdateVoteCount(e, t);
			clone(e = !1);
			toJSON(e);
		}
	>;
	m_mapUpdatedApps: Map<any, any>;
	m_rgQueuedEventsClanIDs: any[];
	m_rgQueuedEventsForEditFlags: any[];
	m_rgQueuedEventsUniqueIDs: any[];
	m_tsUpdatedAppsQueryTime: number;

	DeleteOldAnnouncement(e, t): Promise<any>;
}