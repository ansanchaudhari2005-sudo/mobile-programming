import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

export default function App() {
  const categories = [
    { id: 1, name: "Tutoring", icon: "📚" },
    { id: 2, name: "Data Entry", icon: "💻" },
    { id: 3, name: "Events", icon: "🎉" },
    { id: 4, name: "Delivery", icon: "🛵" },
    { id: 5, name: "Social Media", icon: "📱" },
  ];

  const jobs = [
    {
      id: 1,
      title: "Math Tutor",
      company: "Bright Academy",
      location: "Kathmandu",
      salary: "Rs. 8,000 - 12,000/month",
      type: "Part-time",
      verified: true,
    },
    {
      id: 2,
      title: "Data Entry Assistant",
      company: "Tech Solutions Nepal",
      location: "Lalitpur",
      salary: "Rs. 10,000/month",
      type: "Part-time",
      verified: true,
    },
    {
      id: 3,
      title: "Social Media Assistant",
      company: "Digital Nepal",
      location: "Baneshwor",
      salary: "Rs. 7,000 - 10,000/month",
      type: "Flexible",
      verified: true,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>Good Morning 👋</Text>
            <Text style={styles.userName}>Find your part-time job</Text>
          </View>

          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileText}>A</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >

          {/* Search */}
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>🔍</Text>

            <TextInput
              placeholder="Search jobs, skills or companies"
              placeholderTextColor="#94A3B8"
              style={styles.searchInput}
            />
          </View>

          {/* Banner */}
          <View style={styles.banner}>
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTitle}>
                Find work that fits your schedule
              </Text>

              <Text style={styles.bannerDescription}>
                Discover verified part-time jobs for students in Nepal.
              </Text>

              <TouchableOpacity style={styles.exploreButton}>
                <Text style={styles.exploreText}>Explore Jobs</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.bannerEmoji}>💼</Text>
          </View>

          {/* Categories */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Job Categories</Text>

            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
              >
                <View style={styles.categoryIcon}>
                  <Text style={styles.categoryEmoji}>
                    {category.icon}
                  </Text>
                </View>

                <Text style={styles.categoryName}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Recommended Jobs */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended Jobs</Text>

            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          {jobs.map((job) => (
            <TouchableOpacity
              key={job.id}
              style={styles.jobCard}
              activeOpacity={0.8}
            >

              <View style={styles.jobTop}>
                <View style={styles.companyLogo}>
                  <Text style={styles.logoText}>
                    {job.company.charAt(0)}
                  </Text>
                </View>

                <View style={styles.jobTitleContainer}>
                  <View style={styles.titleRow}>
                    <Text style={styles.jobTitle}>
                      {job.title}
                    </Text>

                    {job.verified && (
                      <Text style={styles.verified}>✓</Text>
                    )}
                  </View>

                  <Text style={styles.companyName}>
                    {job.company}
                  </Text>
                </View>

                <TouchableOpacity>
                  <Text style={styles.bookmark}>♡</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.jobInfoRow}>
                <Text style={styles.jobInfo}>📍 {job.location}</Text>
                <Text style={styles.jobInfo}>⏰ {job.type}</Text>
              </View>

              <View style={styles.jobBottom}>
                <Text style={styles.salary}>
                  {job.salary}
                </Text>

                <TouchableOpacity style={styles.applyButton}>
                  <Text style={styles.applyText}>View Job</Text>
                </TouchableOpacity>
              </View>

            </TouchableOpacity>
          ))}

          {/* Extra Space */}
          <View style={{ height: 80 }} />

        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.activeIcon}>⌂</Text>
            <Text style={styles.activeNavText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>🔍</Text>
            <Text style={styles.navText}>Jobs</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>♡</Text>
            <Text style={styles.navText}>Saved</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>👤</Text>
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },

  smallText: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 4,
  },

  userName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
  },

  profileButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  searchContainer: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 18,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#0F172A",
  },

  banner: {
    backgroundColor: "#2563EB",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  bannerTextContainer: {
    flex: 1,
    paddingRight: 10,
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 27,
  },

  bannerDescription: {
    color: "#DBEAFE",
    fontSize: 13,
    marginTop: 8,
    lineHeight: 19,
  },

  bannerEmoji: {
    fontSize: 55,
    alignSelf: "center",
  },

  exploreButton: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 9,
    marginTop: 15,
  },

  exploreText: {
    color: "#2563EB",
    fontWeight: "700",
    fontSize: 13,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },

  seeAll: {
    color: "#2563EB",
    fontSize: 13,
    fontWeight: "600",
  },

  categoryScroll: {
    marginBottom: 25,
  },

  categoryCard: {
    width: 95,
    height: 105,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  categoryEmoji: {
    fontSize: 23,
  },

  categoryName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#334155",
    textAlign: "center",
  },

  jobCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  jobTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  companyLogo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  logoText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2563EB",
  },

  jobTitleContainer: {
    flex: 1,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  jobTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
    flexShrink: 1,
  },

  verified: {
    backgroundColor: "#16A34A",
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
    width: 17,
    height: 17,
    borderRadius: 9,
    textAlign: "center",
    lineHeight: 17,
    marginLeft: 6,
  },

  companyName: {
    color: "#64748B",
    fontSize: 12,
    marginTop: 4,
  },

  bookmark: {
    fontSize: 26,
    color: "#64748B",
  },

  jobInfoRow: {
    flexDirection: "row",
    marginTop: 15,
    gap: 15,
  },

  jobInfo: {
    color: "#64748B",
    fontSize: 12,
  },

  jobBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    paddingTop: 13,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },

  salary: {
    color: "#0F766E",
    fontSize: 12,
    fontWeight: "700",
    flex: 1,
  },

  applyButton: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 9,
  },

  applyText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },

  bottomNav: {
    height: 70,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 8,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 55,
  },

  navIcon: {
    fontSize: 19,
    marginBottom: 3,
    color: "#64748B",
  },

  activeIcon: {
    fontSize: 22,
    marginBottom: 2,
    color: "#2563EB",
  },

  navText: {
    fontSize: 10,
    color: "#64748B",
  },

  activeNavText: {
    fontSize: 10,
    color: "#2563EB",
    fontWeight: "700",
  },

  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -25,
    borderWidth: 5,
    borderColor: "#F8FAFC",
  },

  addText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "300",
  },
});