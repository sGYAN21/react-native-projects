import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// assets
import avatar from '../assets/avatar.png';
import backIcon from '../assets/icons/arrow.png';
import editIcon from '../assets/icons/edit.png';
import profileIcon from '../assets/icons/profile.png';
import bookmarkIcon from '../assets/icons/bookmark.png';
import tripsIcon from '../assets/icons/travel.png';
import settingsIcon from '../assets/icons/setting.png';
import versionIcon from '../assets/icons/version.png';
import { MenuItem } from '../components/MenuItem';
import { StatItem } from '../components/StatItem';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerIconButton}
            onPress={() => navigation.goBack()}
          >
            <Image source={backIcon} style={styles.headerIcon} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Profile</Text>

          <TouchableOpacity style={styles.headerIconButton}>
            <Image source={editIcon} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>

        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarCircle}>
            <Image source={avatar} style={styles.avatar} />
          </View>

          <Text style={styles.name}>Leonardo</Text>
          <Text style={styles.email}>leonardo@gmail.com</Text>
        </View>
        <View style={styles.statsCard}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Reward Points</Text>
            <Text style={styles.statValue}>360</Text>
          </View>
          <View style={styles.verticalDivider} />

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Travel Trips</Text>
            <Text style={styles.statValue}>238</Text>
          </View>

          <View style={styles.verticalDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Bucket List</Text>
            <Text style={styles.statValue}>473</Text>
          </View>
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          <MenuItem icon={profileIcon} title="Profile" />
          <MenuItem icon={bookmarkIcon} title="Bookmarked" />
          <MenuItem icon={tripsIcon} title="Previous Trips" />
          <MenuItem icon={settingsIcon} title="Settings" />
          <MenuItem icon={versionIcon} title="Version" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 25,
    paddingVertical: 10,

    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: '#1B1E28',
  },
  headerIconButton: {
    padding: 6,
    backgroundColor: '#F7F7F9',
    borderRadius: 20,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },

  avatarSection: {
    alignItems: 'center',
    marginTop: 30,
  },

  avatarCircle: {
    width: 97,
    height: 97,
    borderRadius: "100%",
    backgroundColor: '#FFEADF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 36,
  },

  name: {
    marginTop: 14,
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '500',
    color: '#1B1E28',
  },

  email: {
    fontSize: 14,
    color: '#7D848D',
    fontWeight: '400',
    lineHeight: 16,
    marginTop: 4,
  },

 
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F7F7F9',
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: 15,
    color: '#1B1E28',
    fontWeight: '700',
    marginBottom: 8,
    letterSpacing:0.5
  
  },
  statValue: {
    fontSize: 18,
    color: '#2D6CEE',
    fontWeight: '600',
  },
  verticalDivider: {
    width: 3,
    height: '100%',
    backgroundColor: '#F1F1F3',
  },
  menu: {
    marginTop: 30,
  },
});
